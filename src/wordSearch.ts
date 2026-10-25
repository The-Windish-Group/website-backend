import * as fs from "node:fs"
import express, { type Request, type Response } from 'express';

export const data = JSON.parse(fs.readFileSync("../data/wnen.json").toString())

export function requstHandler(req: Request, res: Response) {
    const word = wordToEnglish(req.query)
    res.status(200)
}

export function wordToEnglish(word) {
    return data.find((e) => e.wn == word);
}