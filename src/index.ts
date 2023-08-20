//create a new instance of a QviSdkClient where the constructor calls a function called ready from a package called signify-ts and sets the private variable client to an instance of SignifyClient
//the class also takes in a url parameter and a passcode parameter
import { SignifyClient, ready } from "signify-ts";
const VLEI_SCHEMA_SAID: string = 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY';

export class QviSdkClient {
    private _client: SignifyClient;
    public url: string;
    public passcode: string;

    constructor(url: string, passcode: string) {
        this.url = url;
        this.passcode = passcode;

        this.QVIready().then((client) => {
            this._client = client;
        });
    }

    private async QVIready(): Promise<SignifyClient> {
        await ready();
        return new SignifyClient(this.url, this.passcode);
    }

    public async crete_vlei_registry(): Promise<string> {
        return await this._client.registries().create('issuer', 'vlei')
    }

    public async issue_legal_entity_credential(
        lei: string,
        recipient_alias: string,
        recipient_oobi: string): Promise<string> {
        let recipient_oobi_op = await this._client.oobis().resolve(recipient_oobi, recipient_alias)
        while (!recipient_oobi_op["done"]) {
            recipient_oobi_op = await this._client.operations().get(recipient_oobi_op.name);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        let vlei_schema_oobi_op = await this._client.oobis().resolve(this.url+VLEI_SCHEMA_SAID, "vlei_schema")
        while (!vlei_schema_oobi_op["done"]) {
            vlei_schema_oobi_op = await this._client.operations().get(vlei_schema_oobi_op.name);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        let registries = await this._client.registries().list('issuer')
        let registry = registries[0]

        // Issue credential
        const vcdata = {
            "LEI": lei
        }
        let issue_credential_op = await this._client.credentials().issue('issuer', registry.regk, VLEI_SCHEMA_SAID, recipient_oobi_op.prefix, vcdata)
        while (!issue_credential_op["done"]) {
            issue_credential_op = await this._client.operations().get(issue_credential_op.name);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        let issued_credentials = await this._client.credentials().list('issuer')
        console.log("Credential issued")
        let issued_credential = issued_credentials[0]

        return issued_credential
    }

}
