/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Create exciting customer journeys and engage people in a dialogue through [Flow](https://www.infobip.com/docs/moments/manage-flow), our visual communication builder that helps automatize business processes and reach relevant audiences at just the right moment. People can be added or removed from the communication programmatically via Flow API.
 *
 * @remarks
 *
 * When you need to collect customer data that`s necessary to generate new leads and update existing profiles, turn to Forms: they are [managed](https://www.infobip.com/docs/forms/manage-forms) directly on the Infobip web interface. Meanwhile, Forms API lets you easily retrieve an active form from your web page, track events, or collect the field values when the end user submits the form. You will be able to react quickly based on this data in order to engage leads and analyze user behavior.
 *
 */
export class Moments {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Add Person to Flow
     *
     * @remarks
     * Creates or updates a person and adds it to Flow
     */
    async addPeopleToFlow(
        req: operations.AddPeopleToFlowRequest,
        security: operations.AddPeopleToFlowSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.AddPeopleToFlowResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddPeopleToFlowRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/communication/1/flows/{campaignId}/participants",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "flowPersonRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.AddPeopleToFlowSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
        };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.AddPeopleToFlowResponse = new operations.AddPeopleToFlowResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                break;
            case [400, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.exceptionResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ExceptionResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get form
     *
     * @remarks
     * Use this method to get an active form by its ID.
     */
    async getForm(
        security: operations.GetFormSecurity,
        id: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetFormResponse> {
        const req = new operations.GetFormRequest({
            id: id,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/forms/1/forms/{id}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetFormSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/xml;q=0.5, application/xml;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetFormResponse = new operations.GetFormResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiFormDto = utils.objectToClass(httpRes?.data, shared.ApiFormDto);
                }
                if (utils.matchContentType(contentType, `application/xml`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                break;
            case [401, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/xml`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiException = utils.objectToClass(httpRes?.data, shared.ApiException);
                }
                break;
        }

        return res;
    }

    /**
     * Get forms
     *
     * @remarks
     * Use this method to get a list of active forms.
     */
    async getForms(
        security: operations.GetFormsSecurity,
        limit?: number,
        offset?: number,
        config?: AxiosRequestConfig
    ): Promise<operations.GetFormsResponse> {
        const req = new operations.GetFormsRequest({
            limit: limit,
            offset: offset,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/forms/1/forms";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetFormsSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/xml;q=0.5, application/xml;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetFormsResponse = new operations.GetFormsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiFormListDto = utils.objectToClass(httpRes?.data, shared.ApiFormListDto);
                }
                if (utils.matchContentType(contentType, `application/xml`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                break;
            case [400, 401, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/xml`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiException = utils.objectToClass(httpRes?.data, shared.ApiException);
                }
                break;
        }

        return res;
    }

    /**
     * Increment form view count
     *
     * @remarks
     * Use this method to increase the view counter of a specific form. It's used for proper statistics calculation. Statistics are available on the form performance page on the Portal.
     */
    async incrementViewCount(
        security: operations.IncrementViewCountSecurity,
        id: string,
        config?: AxiosRequestConfig
    ): Promise<operations.IncrementViewCountResponse> {
        const req = new operations.IncrementViewCountRequest({
            id: id,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/forms/1/forms/{id}/views", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.IncrementViewCountSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/xml;q=0.5, application/xml;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.IncrementViewCountResponse =
            new operations.IncrementViewCountResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiStatusResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ApiStatusResponse
                    );
                }
                if (utils.matchContentType(contentType, `application/xml`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                break;
            case [401, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/xml`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.body = out;
                }
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiException = utils.objectToClass(httpRes?.data, shared.ApiException);
                }
                break;
        }

        return res;
    }

    /**
     * Remove Person from Flow
     *
     * @remarks
     * Removes a person with given identifier from the Flow
     */
    async removePeopleFromFlow(
        req: operations.RemovePeopleFromFlowRequest,
        security: operations.RemovePeopleFromFlowSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.RemovePeopleFromFlowResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemovePeopleFromFlowRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/communication/1/flows/{campaignId}/participants",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.RemovePeopleFromFlowSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.RemovePeopleFromFlowResponse =
            new operations.RemovePeopleFromFlowResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                break;
            case [400, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.exceptionResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ExceptionResponse
                    );
                }
                break;
        }

        return res;
    }
}
