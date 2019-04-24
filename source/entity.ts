/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

import * as Types from './types';

/**
 * Card entity class.
 */
@RestDB.Schema.Entity('cards')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Card Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Card status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration([...Object.values(Types.Status.Common), ...Object.values(Types.Status.System)])
  @Class.Public()
  public status!: Types.Status.Common | Types.Status.System;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Last update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Expiration date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public expireAt!: Date;

  /**
   * Id number.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public idNumber!: ApiCore.Entities.Field;

  /**
   * Card PAN.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public pan!: string;

  /**
   * Card brand.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public brand!: string;

  /**
   * Card holder name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public holder!: string;

  /**
   * Card description.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public description?: string;

  /**
   * Local.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public local!: string;

  /**
   * Number.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public number?: string;

  /**
   * Complement.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public complement?: string;

  /**
   * Neighborhood.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public neighborhood!: string;

  /**
   * City.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public city!: ApiCore.Entities.Field;

  /**
   * State.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public state!: ApiCore.Entities.Field;

  /**
   * Country.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public country!: string;

  /**
   * ZIP.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public zip!: ApiCore.Entities.Field;
}
