/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Card update request.
 */
@RestDB.Schema.Entity('cards/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Card status.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Status.Common))
  @Class.Public()
  public status?: Types.Status.Common;

  /**
   * Card description.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public description?: string;
}
