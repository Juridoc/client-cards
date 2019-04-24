/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

/**
 * Card creation request.
 */
@RestDB.Schema.Entity('cards')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Id number.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(ApiCore.Entities.Field)
  @Class.Public()
  public idNumber!: ApiCore.Entities.Field;

  /**
   * Card APN.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(15, 20)
  @Class.Public()
  public pan!: string;

  /**
   * Card holder.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public holder!: string;

  /**
   * Card expiry month.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number(0, 11)
  @Class.Public()
  public month!: number;

  /**
   * Card expiry year.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number(new Date().getFullYear(), new Date().getFullYear() + 25)
  @Class.Public()
  public year!: number;

  /**
   * Card CVV.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(3, 4)
  @Class.Public()
  public cvv!: string;

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
