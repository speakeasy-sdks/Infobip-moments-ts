/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Moments } from "./moments";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  /**
   * Production environment
   */
  "https://1l2c3.api-us.infobip.com",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * OpenAPI Specification that contains all public endpoints and webhooks.
 */
export class Infobip {
  /**
   * Create exciting customer journeys and engage people in a dialogue through [Flow](https://www.infobip.com/docs/moments/manage-flow), our visual communication builder that helps automatize business processes and reach relevant audiences at just the right moment. People can be added or removed from the communication programmatically via Flow API.
   *
   * @remarks
   *
   * When you need to collect customer data that`s necessary to generate new leads and update existing profiles, turn to Forms: they are [managed](https://www.infobip.com/docs/forms/manage-forms) directly on the Infobip web interface. Meanwhile, Forms API lets you easily retrieve an active form from your web page, track events, or collect the field values when the end user submits the form. You will be able to react quickly based on this data in order to engage leads and analyze user behavior.
   *
   */
  public moments: Moments;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.3";
  private _genVersion = "2.24.0";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;

    this.moments = new Moments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
