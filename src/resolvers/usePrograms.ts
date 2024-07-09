import { useMutation, useQuery } from "@apollo/client";
import { useCallback, useMemo, useState, useContext } from "react";
import gqlDefined from "../graphql/main";
const { getPrograms } = gqlDefined;

export const usePrograms = (props: any) => {
  //   const [, { addToast }] = useToasts();
  const client = props;
  //   const history = useHistory();
  //   const { enquiryProductSku } = useSelectedEnquiryStoreContext();
  //   const handleCheckbox = (checkedOption) => {
  //     if (checkedOption.target.checked) {
  //       setCheckedValues((oldArray) => [...oldArray, checkedOption.target.value]);
  //     } else {
  //       setCheckedValues(
  //         checkedValues.filter((item) => item !== checkedOption.target.value)
  //       );
  //     }
  //   };
  const { data, loading } = useQuery(getPrograms, {
    variables: { key: 1 },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });
  //   const [contactUs, { loading: enquiryLoading }] = useMutation(
  //     operations.submitEnquiryForm
  //   );
  const all_programs = useMemo(() => {
    if (loading) {
      return [" "];
    } else {
      const storeList = [];
      console.log(data);
      return data?.getPrograms?.data;
    }
  }, [loading, data]);
  //   const [successPage, setSuccessPage] = useState(false);
  //   const handleFormSubmit = useCallback(
  //     async ({
  //       name,
  //       email,
  //       telephone,
  //       comment,
  //       store_id,
  //       phone_pref,
  //       email_pref,
  //     }) => {
  //       try {
  //         let contact_preference = null;
  //         if (phone_pref && email_pref) {
  //           contact_preference = "BOTH";
  //         } else if (phone_pref && !email_pref) {
  //           contact_preference = "TELEPHONE";
  //         } else if (email_pref && !phone_pref) {
  //           contact_preference = "EMAIL";
  //         }
  //         const selectedStore = stores.find((store) => store.value === store_id);
  //         const selectedStoreName = selectedStore ? selectedStore.label : "";
  //         await contactUs({
  //           variables: {
  //             name: name,
  //             email: email,
  //             comment: comment,
  //             telephone: telephone,
  //             store_id: store_id,
  //             contact_preference: contact_preference,
  //             subject_details: {
  //               subject_label: "Product",
  //               subject_options: [
  //                 {
  //                   details: [
  //                     {
  //                       name: "header_string",
  //                       value: ` ${
  //                         selectedStoreName ? " - " + selectedStoreName : ""
  //                       } ${enquiryProductSku ? " - " + enquiryProductSku : ""} `,
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           },
  //         });
  //         setSuccessPage(true);
  //         const location = {
  //           pathname: "/enquiry-success",
  //           state: { fromEnquiryForm: true },
  //         };
  //         history.push(location);
  //         history.push("/enquiry-success");
  //       } catch {
  //         addToast({
  //           type: "error",
  //           message:
  //             "An error has occurred. Please check the input and try again.",
  //           dismissable: true,
  //           timeout: 10000,
  //         });
  //         return;
  //       }
  //     },
  //     [contactUs, addToast, history, stores, enquiryProductSku]
  //   );
  return {
    all_programs,
    // loading,
    // handleFormSubmit,
    // enquiryLoading,
    // successPage,
    // handleCheckbox,
  };
};
