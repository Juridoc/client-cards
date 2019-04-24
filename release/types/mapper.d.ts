/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Credit cards mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new credit card based on the specified creation request.
     * @param request Credit card creation request.
     * @returns Returns a promise to get the credit card Id.
     * @throws Throws an error when the credit card wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the credit card that corresponds to the specified credit card Id.
     * @param id Credit card Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the credit card entity.
     * @throws Throws an error when the credit card wasn't loaded.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the credit card that corresponds to the specified credit card Id based on the given update request.
     * @param id Credit card Id.
     * @param request Credit card update request.
     * @returns Returns a promise to get true when the credit card was updated, false otherwise.
     * @throws Throws an error when the credit card wasn't updated.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all credit cards that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the credit card list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all credit cards that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of credit cards or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the credit card that corresponds to the specified credit card Id.
     * @param id Credit card Id.
     * @returns Returns a promise to get true when the credit card was deleted, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
