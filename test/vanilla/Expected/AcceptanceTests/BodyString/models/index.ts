/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { RequestOptionsBase } from "ms-rest-js";


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing RefColorConstant.
 */
export interface RefColorConstant {
  /**
   * @member {string} [field1] Sample string.
   */
  field1?: string;
}

/**
 * @interface
 * An interface representing StringPutNullOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface StringPutNullOptionalParams extends RequestOptionsBase {
  /**
   * @member {StringBody} [stringBody] Possible values include: ''
   */
  stringBody?: StringBody;
}

/**
 * @interface
 * An interface representing EnumModelPutReferencedConstantOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface EnumModelPutReferencedConstantOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [field1] Sample string.
   */
  field1?: string;
}

/**
 * Defines values for Colors.
 * Possible values include: 'red color', 'green-color', 'blue_color'
 * @readonly
 * @enum {string}
 */
export enum Colors {
  RED_COLOR = 'red color',
  GREEN_COLOR = 'green-color',
  BLUE_COLOR = 'blue_color',
}

/**
 * Defines values for StringBody.
 * Possible values include: ''
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: StringBody = <StringBody>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum StringBody {
  NULL = null as any,
}

/**
 * Defines values for GetNullOKResponse.
 * Possible values include: ''
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: GetNullOKResponse =
 * <GetNullOKResponse>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum GetNullOKResponse {
  NULL = null as any,
}

/**
 * Defines values for GetEmptyOKResponse.
 * Possible values include: ''
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: GetEmptyOKResponse =
 * <GetEmptyOKResponse>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum GetEmptyOKResponse {
  EMPTY_STRING = '',
}

/**
 * Defines values for StringBody1.
 * Possible values include: ''
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: StringBody1 =
 * <StringBody1>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum StringBody1 {
  EMPTY_STRING = '',
}

/**
 * Defines values for GetMbcsOKResponse.
 * Possible values include:
 * '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: GetMbcsOKResponse =
 * <GetMbcsOKResponse>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum GetMbcsOKResponse {
  啊齄丂狛狜隣郎隣兀﨩ˊーぁんァヶΑАЯАЯĀɡㄅㄩⱭɡ䜣 = '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€',
}

/**
 * Defines values for StringBody2.
 * Possible values include:
 * '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: StringBody2 =
 * <StringBody2>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum StringBody2 {
  啊齄丂狛狜隣郎隣兀﨩ˊーぁんァヶΑАЯАЯĀɡㄅㄩⱭɡ䜣 = '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€',
}

/**
 * Defines values for GetWhitespaceOKResponse.
 * Possible values include: '    Now is the time for all good men to come to
 * the aid of their country    '
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: GetWhitespaceOKResponse =
 * <GetWhitespaceOKResponse>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum GetWhitespaceOKResponse {
  _NOW_IS_THE_TIME_FOR_ALL_GOOD_MEN_TO_COME_TO_THE_AID_OF_THEIR_COUNTRY_ = '    Now is the time for all good men to come to the aid of their country    ',
}

/**
 * Defines values for StringBody3.
 * Possible values include: '    Now is the time for all good men to come to
 * the aid of their country    '
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: StringBody3 =
 * <StringBody3>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum StringBody3 {
  _NOW_IS_THE_TIME_FOR_ALL_GOOD_MEN_TO_COME_TO_THE_AID_OF_THEIR_COUNTRY_ = '    Now is the time for all good men to come to the aid of their country    ',
}
