import * as mongoose from 'mongoose';
import { ValidatedSchemaDefinition } from './validatedSchemaDefinition';

/**
 * Unique user identifier.
 *
 * @interface IUserIdentity
 */
interface IUserIdentity {
  user_id: string;
}

interface IUser extends IUserIdentity {
  lastHref: string;
}

interface IUserDocument extends IUser, mongoose.Document {}

type UserSchema = ValidatedSchemaDefinition<IUser>;

const userSchemaDefinition: UserSchema = {
  user_id: { type: String, required: true },
  lastHref: { type: String, require: true }
};

const userSchema = new mongoose.Schema(userSchemaDefinition);

// tslint:disable-next-line:variable-name
const User = mongoose.model<IUserDocument>('user', userSchema, 'users');

export { IUserIdentity, IUser, IUserDocument, User };