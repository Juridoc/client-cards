/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCore from '@juridoc/client-core';
import * as Types from './types';
/**
 * Card entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Card Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Card status.
     */
    status: Types.Status.Common | Types.Status.System;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Last update date.
     */
    updatedAt?: Date;
    /**
     * Expiration date.
     */
    expireAt: Date;
    /**
     * Id number.
     */
    idNumber: ApiCore.Entities.Field;
    /**
     * Card PAN.
     */
    pan: string;
    /**
     * Card brand.
     */
    brand: string;
    /**
     * Card holder name.
     */
    holder: string;
    /**
     * Card description.
     */
    description?: string;
    /**
     * Local.
     */
    local: string;
    /**
     * Number.
     */
    number?: string;
    /**
     * Complement.
     */
    complement?: string;
    /**
     * Neighborhood.
     */
    neighborhood: string;
    /**
     * City.
     */
    city: ApiCore.Entities.Field;
    /**
     * State.
     */
    state: ApiCore.Entities.Field;
    /**
     * Country.
     */
    country: string;
    /**
     * ZIP.
     */
    zip: ApiCore.Entities.Field;
}
