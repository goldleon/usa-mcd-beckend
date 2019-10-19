import { join } from "path";
import { default as csv } from "csvjson";
import { readFile } from "fs";

import { searchInArray } from "../../utils/data-utils";

const csvDataPath = join(__dirname, '../../', 'data/mcdonalds.csv')
const options = {
    delimiter: ',',
    quote: '"'
}

export default {
    async getAll(req, res) {
        readFile(csvDataPath, 'utf-8', (err, fileDataContent) => {
            if (err) {
                return res.status(500).json([])
            }
            const data = csv.toArray(fileDataContent, options)
            return res.status(200).json(data)
        })

    },
    async getSearchedTermData(req, res) {
        const { id } = req.params;
        readFile(csvDataPath, 'utf-8', (err, fileDataContent) => {
            if (err) {
                return res.status(500).json([])
            }
            const data = csv.toArray(fileDataContent, options)

            const searchData = searchInArray(data, id)

            return res.status(200).json(searchData)
        })
    }
}