import { MembersDBHelper } from "../dal/members";
import { Request, Response } from "express";
import { generateToken } from "../utils/token";

export class MemebershipClass {
    public sql= new MembersDBHelper()

    rootRoute(req: Request, res: Response) {
        return res.status(200).send({ domainName: 'papho.org', developer: "developer@papho.org" })
    }

    public async EmailVerification(req: Request, res: Response) {
        // console.log("fnding SQL ",  req.body.email)
        await  new MembersDBHelper().emailVerification(req.body.email, (err: Error, data: number) => {
            err ? res.status(400).send(err) : res.status(200).send({data: data});
        });
        // console.log("data: ", 4199)
        // res.status(200).send({data: 4199}) ;
    }
    async Register(req: Request, res: Response) {

        await  new MembersDBHelper().createMembers(req.body, (err: any, data: any) => {
            err ? res.status(400).send(err) : res.status(200).send(data);
        }
        );
    }
    async Membershipfee(req: Request, res: Response) {

        await  new MembersDBHelper().membershipfee(req.body, (err: any, data: any) => {
            err ? res.status(400).send(err) : res.status(200).send(data);
        }
        );
    }
    async Login(req: Request, res: Response) {

        await  new MembersDBHelper().loginMembers(req.body, (err: any, data: any) => {

            err ? res.status(400).send(err) : res.status(200).send({
                id: data.dataValues.id,
                full_name: data.dataValues.full_name,
                email: data.dataValues.email,
                phone: data.dataValues.phone,
                country: data.dataValues.country,
                occupation: data.dataValues.occupation,
                verify: data.dataValues.verify,
                areaOfInterest: data.dataValues.areaOfInterest,
                createdAt: data.dataValues.createdAt,
                token: generateToken(data.dataValues),
            });
        }
        );
    }
}