/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const $host: coreHttp.OperationParameter = {
  parameterPath: "$host",
  mapper: {
    type: { name: "String" },
    serializedName: "$host",
    required: true
  }
};

export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "api-version",
  mapper: {
    type: { name: "String" },
    serializedName: "api-version",
    isConstant: true,
    defaultValue: "2016-02-29"
  }
};

export const complexBody: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.Basic
};

export const complexBody1: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.IntWrapper
};

export const complexBody2: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.LongWrapper
};

export const complexBody3: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.FloatWrapper
};

export const complexBody4: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.DoubleWrapper
};

export const complexBody5: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.BooleanWrapper
};

export const complexBody6: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.StringWrapper
};

export const complexBody7: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.DateWrapper
};

export const complexBody8: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.DatetimeWrapper
};

export const complexBody9: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.Datetimerfc1123Wrapper
};

export const complexBody10: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.DurationWrapper
};

export const complexBody11: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.ByteWrapper
};

export const complexBody12: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.ArrayWrapper
};

export const complexBody13: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.DictionaryWrapper
};

export const complexBody14: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.Siamese
};

export const complexBody15: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.Fish
};

export const complexBody16: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.Salmon
};

export const complexBody17: coreHttp.OperationParameter = {
  parameterPath: "complexBody",
  mapper: Mappers.ReadonlyObj
};
