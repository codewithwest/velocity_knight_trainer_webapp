import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation createUser($input: UserInput!
        ) 
        { 
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
const LOGIN_USER = gql`
    mutation loginUser($input: UserInput!
)
{
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

// export const SUBMIT_ENQUIRY_FORM = gql`
//   mutation submitEnquiryForm(
//     $name: String!
//     $email: String!
//     $comment: String!
//     $telephone: String
//     $store_id: String
//     $contact_preference: ContactPreferenceEnum
//     $subject_details: ContactUsSubjectInput!
//   ) {
//     contactUs(
//       input: {
//         name: $name
//         email: $email
//         comment: $comment
//         telephone: $telephone
//         store_id: $store_id
//         contact_preference: $contact_preference
//         subject_details: $subject_details
//       }
//     ) {
//       status
//     }
//   }
// `;

const user_queries_mutations = {
    register_user: REGISTER_USER,
    login_user: LOGIN_USER
};
export default user_queries_mutations;
