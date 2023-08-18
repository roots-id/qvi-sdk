import { SignifyClient, Tier } from "signify-ts";
const url = "http://127.0.0.1:3901"
const boot_url = "http://127.0.0.1:3903"

const LE_SCHEMA: string = 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY';

const OOR_AUTH_SCHEMA: string = 'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E';
const OOR_QVI_SCHEMA: string = 'EBNaNu-M9P5cgrnfl2Fvymy4E_jvxxyjb70PRtiANlJy'

const ECR_AUTH_SCHEMA: string = 'ED_PcIn1wFDe0GB0W7Bk9I4Q_c9bQJZCM2w7Ex9Plsta'
const ECR_LE_SCHEMA = 'EEy9PkikFcANV1l7EHukCeXqrzT1hNZjGlUk7wuMO5jw'
const ECR_QVI_SCHEMA = 'EBNaNu-M9P5cgrnfl2Fvymy4E_jvxxyjb70PRtiANlJy'

const RULES: any = {
    "d": "EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU",
    "usageDisclaimer": {
        "l": "Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled."
    },
    "issuanceDisclaimer": {
        "l": "All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework."
    }
}


/**
 * Issue Legal Entity Credent ial using TypeScript.
 *
 * This function issues a Legal Entity Credential using a QVI (Qualified Verifier Issuer).
 *
 * @param lei Legal Entity Identifier.
 * @param recipient Alias of the new Legal Entity.
 */
function issue_legal_entity_credential(
    lei: string,
    recipient: string
): string {
    // Function implementation
    const LE_SCHEMA: string = 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY';

    return 'vlei_aid'
}

/**
 * Issue OOR Auth using TypeScript.
 *
 * This function issues an OOR (Out of Role) Auth credential using a QVI (Qualified Verifier Issuer).
 *
 * @param passcode Passcode for authentication.
 * @param vlei VLEI-aid returned from issue_legal_entity_credential.
 * @param oor AID of the recipient of the OOR credential.
 * @param person_legal_name Legal name of the requested person.
 * @param official_role Requested official role.
 * @param recipient Alias of the QVI to authorize with this AUTH credential.
 */
function issue_oor_auth(
    passcode: string,
    vlei: string,
    oor: string,
    person_legal_name: string,
    official_role: string,
    recipient: string
): string {
    // Function implementation
    const OOR_AUTH_SCHEMA: string = 'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E';


    return 'oor_auth_aid'
}


/**
 * Issue Legal Entity OOR using TypeScript.
 *
 * This function issues a Legal Entity OOR (Out of Role) credential using a QVI (Qualified Verifier Issuer).
 *
 * @param passcode Passcode for authentication.
 * @param person_legal_name Legal name of the person who will hold OOR credential.
 * @param recipient Alias that identifies them in your contacts.
 * @param official_role Their official role.
 * @param lei LEI of the Legal Entity for this OOR.
 * @param auth_said SAID of the OOR AUTH credential return from issue_oor_auth.
 */
function issue_legal_entity_oor(
    passcode: string,
    person_legal_name: string,
    recipient: string,
    official_role: string,
    lei: string,
    auth_said: string
): string {
    // Function implementation
    return 'oor_aid'
}


/**
 * Issue ECR Auth using QVI in TypeScript.
 *
 * This function issues an ECR (Entity Credential Record) authentication using a QVI (Qualified Verifier Issuer).
 *
 * @param passcode Passcode for authentication.
 * @param lei Legal Entity Identifier.
 * @param OOR_cred AID of the recipient of the OOR (Out of Role) credential.
 * @param person_legal_name Legal name of the requested person.
 * @param engagement_context_role Requested engagement context role.
 * @param recipient AID of the QVI.
 */
function issue_ecr_auth(
    passcode: string,
    lei: string,
    OOR_cred: string,
    person_legal_name: string,
    engagement_context_role: string,
    recipient: string
): string {
    // Function implementation
    const ECR_AUTH_SCHEMA: string = 'ED_PcIn1wFDe0GB0W7Bk9I4Q_c9bQJZCM2w7Ex9Plsta'

    return 'ecr_auth_aid'
}

/**
 * Issue Legal Entity ECR using QVI in TypeScript.
 *
 * This function issues a Legal Entity ECR (Entity Credential Record) using a QVI (Qualified Verifier Issuer).
 *
 * @param passcode Passcode for authentication.
 * @param lei Legal Entity Identifier.
 * @param person_legal_name Legal name of the person.
 * @param engagement_context_role Engagement context role.
 * @param recipient Alias of the recipient of the ECR credential.
 */
function issue_ecr_from_legal_entity(
    passcode: string,
    lei: string,
    person_legal_name: string,
    engagement_context_role: string,
    recipient: string
): string {
    // Function implementation
    const ECR_LE_SCHEMA = 'EEy9PkikFcANV1l7EHukCeXqrzT1hNZjGlUk7wuMO5jw'

    return 'ecr_aid'
}

/**
 * Issue Legal Entity ECR as QVI using TypeScript.
 *
 * This function issues a Legal Entity ECR (Entity Credential Record) as a QVI (Qualified Verifier Issuer)
 * on behalf of a Legal Entity.
 *
 * @param passcode Passcode for authentication.
 * @param lei Legal Entity Identifier.
 * @param person_legal_name Legal name of the person.
 * @param engagement_context_role Engagement context role.
 * @param recipient Alias of the recipient of ECR credential.
 * @param auth_said SAID of the ECR AUTH credential returned from issue_ecr_auth.
 */
function issue_legal_entity_ecr_as_qvi(
    passcode: string,
    lei: string,
    person_legal_name: string,
    engagement_context_role: string,
    recipient: string,
    auth_said: string
): string {
    // Function implementation
    const ECR_QVI_SCHEMA = 'EBNaNu-M9P5cgrnfl2Fvymy4E_jvxxyjb70PRtiANlJy'

    return 'ecr_aid'

}
