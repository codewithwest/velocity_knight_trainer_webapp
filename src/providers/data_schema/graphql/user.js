import { gql } from "@apollo/client";

const register_user = gql`
  mutation createUser($input: UserInput!) { 
   createUser(input:$input){
        id
        email
        username
        token
        created_at
        updated_at
        last_login
        last_ip
        account_active
        message
    }
  }`
const login_user = gql`
    mutation loginUser($input: UserInput!) {
    loginUser(input: $input){
        id
        email
        username
        token
        created_at
        updated_at
        last_login
        last_ip
        account_active
        message
    }
}
`
const get_user = gql`
    query getUser($id: Int!) {
    getUser(id: $id) {
        id
        email
        username
        password
        token
        created_at
        updated_at
        last_login
        last_ip
        account_active
        message
    }
}
`

export {
    register_user,
    login_user,
    get_user,
};
