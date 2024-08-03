import { gql } from "@apollo/client";

const get_programs = gql`
query getPrograms($input: ProgramInput!) {
  getPrograms(input: $input) {
    id
    name
    exercises {
      exercise
      reps
      sets
      rest
    }
    days
    type
    instructions
    keys
    created_at
    updated_at
    private
    __typename
  }
}
`;

const count_programs = gql`
  query  countPrograms($input: CountProgramsInput!) {
    countPrograms(input: $input) {
      count
    }
  }
`;

const create_program = gql`
  mutation createProgram($input: ProgramInput!) {
    createProgram(input: $input){
      id
      name
      exercises {
        exercise
        reps
        sets
        rest
      }
      days
      instructions
      type
      keys
      created_at
      updated_at
      private
  }
}
`
const update_program = gql`
  mutation updateProgram($input: ProgramInput!) {
  updateProgram(input: $input){
    id
    name
      exercises {
      exercise
      reps
      sets
      rest
    }
    days
    type
    instructions
    keys
    created_at
    updated_at
    private
  }
}
`

export {
  get_programs,
  count_programs,
  create_program,
  update_program
}

