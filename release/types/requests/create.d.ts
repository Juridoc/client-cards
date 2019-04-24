/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCore from '@juridoc/client-core';
/**
 * Card creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Id number.
     */
    idNumber: ApiCore.Entities.Field;
    /**
     * Card APN.
     */
    pan: string;
    /**
     * Card holder.
     */
    holder: string;
    /**
     * Card expiry month.
     */
    month: number;
    /**
     * Card expiry year.
     */
    year: number;
    /**
     * Card CVV.
     */
    cvv: string;
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
