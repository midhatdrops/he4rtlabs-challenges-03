import * as dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const DB_ADRESS = process.env.RESET_ADRESS

const reset = () => {
  axios
    .post(DB_ADRESS, {
      users: [],
    })
    .then((res) => res.status)
}

reset()

export default reset
