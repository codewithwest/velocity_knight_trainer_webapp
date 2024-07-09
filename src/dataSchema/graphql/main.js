import { gql } from "@apollo/client";

const GET_PROGRAMS = gql`
  query  getPrograms($key: Int!) {
    getPrograms(keys: $key) {
      id
      data
      days
      type
      keys
      created_at
      updated_at
      private
    }
  }
`;

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

const gqlDefined = {
  getPrograms: GET_PROGRAMS,
};
export default gqlDefined;
