/// <reference types="vite/client" />



/**
 * @interface
 */
interface ImportMetaEnv {
  readonly VITE_HAGURUMA_EMBED_URL: string;
  readonly VITE_UMEKOCHAN_URL: string;

  readonly VITE_SERVICE_DEVELOPER_NAME: string;
  readonly VITE_SERVICE_DEVELOPER_HOMEPAGE: string;
  readonly VITE_SERVICE_DEVELOPER_EMAIL: string;
  readonly VITE_SERVICE_DEVELOPER_POSTCODE: string;
  readonly VITE_SERVICE_DEVELOPER_ADDRESS: string;
  readonly VITE_SERVICE_DEVELOPER_PHONENUMBER: string;
}


/**
 * @interface
 */
interface ImportMeta {
  readonly env: ImportMetaEnv
}
