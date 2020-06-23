import * as Joi from 'typesafe-joi';
import { ObjectId } from 'mongodb';

export const RequestContextSchema = Joi.object({
    companyId: Joi.object().type(ObjectId).required(),
    ip: Joi.string().required(),
    endpoint: Joi.string().required(),
    token: Joi.string().required(),
}).required();

export interface IRequestContext {
    companyId: ObjectId;
    ip: string;
    endpoint: string;
    token: string;
}
