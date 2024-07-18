// const EnquiryForm = (props) => {
//   const classes = useStyle(defaultClasses, props.classes);
//   const { type } = props;
//   const { formatMessage } = useIntl();
//   const { selectedEnquiryStore } = useSelectedEnquiryStoreContext();
//   const [checkedValues, setCheckedValues] = useState([]);
//   const {
//     stores,
//     handleFormSubmit,
//     successPage,
//     enquiryLoading,
//     handleCheckbox,
//   } = useEnquiry({ checkedValues, setCheckedValues });
//   const { innerWidth } = useWindowSize();
//   const isMobile = innerWidth < 1024;
//   const formApiRef = useRef(null);
//   const setFormApi = useCallback((api) => (formApiRef.current = api), []);
//   const CHECKBOX_FIELDS = ["email_pref", "phone_pref"];
//   const submitLabel = isMobile ? (
//     <FormattedMessage id={"enquiryForm.submit"} defaultMessage={"Submit"} />
//   ) : (
//     <FormattedMessage
//       id={"enquiryForm.submit"}
//       defaultMessage={"Submit Enquiry"}
//     />
//   );
//   useEffect(() => {
//     formApiRef.current.setValue("store_id", selectedEnquiryStore);
//   }, [formApiRef, selectedEnquiryStore]);
//   return successPage ? (
//     <CmsBlock identifiers={"enquiry_form__success"} />
//   ) : (
//     <Form
//       className={classes.root}
//       onSubmit={handleFormSubmit}
//       getApi={setFormApi}
//     >
//       {" "}
//       <div className={type === "popup" ? classes.header : classes.pageHeader}>
//         {" "}
//         <FormattedMessage
//           id={"enquiryForm.title"}
//           defaultMessage={"In-Store Enquiry"}
//         />{" "}
//       </div>
//       <div className={classes.content}>
//         {" "}
//         <div className={classes.personalDetails}>
//           {" "}
//           <div className={classes.subtitle}>
//             {" "}
//             <FormattedMessage
//               id={"enquiryForm.personalDetails"}
//               defaultMessage={"Personal Details"}
//             />{" "}
//           </div>
//           <Field
//             classes={{ root: classes.field }}
//             id={"name"}
//             label={formatMessage({
//               id: "enquiryForm.nameSurname",
//               defaultMessage: "Name & Surname*",
//             })}
//           >
//             {" "}
//             <TextInput
//               field={"name"}
//               validate={isRequired}
//               placeholder={formatMessage({
//                 id: "enquiryForm.nameSurnamePlaceholder",
//                 defaultMessage: "Enter Name & Surname",
//               })}
//             />{" "}
//           </Field>
//           <Field
//             classes={{ root: classes.field }}
//             id={"email"}
//             label={formatMessage({
//               id: "enquiryForm.email",
//               defaultMessage: "Email Address*",
//             })}
//           >
//             {" "}
//             <TextInput
//               field={"email"}
//               validate={isRequired}
//               placeholder={formatMessage({
//                 id: "enquiryForm.emailPlaceholder",
//                 defaultMessage: "Enter Email Address",
//               })}
//             />{" "}
//           </Field>
//           <Field
//             classes={{ root: classes.fieldPhone }}
//             id={"telephone"}
//             label={formatMessage({
//               id: "enquiryForm.phone",
//               defaultMessage: "Contact Number*",
//             })}
//           >
//             {" "}
//             <TextInput
//               field={"telephone"}
//               validate={isRequired}
//               placeholder={formatMessage({
//                 id: "enquiryForm.phonePlaceholder",
//                 defaultMessage: "Enter Contact Number",
//               })}
//             />{" "}
//           </Field>{" "}
//         </div>
//         <div className={classes.details}>
//           {" "}
//           <div className={classes.subtitle}>
//             {" "}
//             <FormattedMessage
//               id={"enquiryForm.details"}
//               defaultMessage={"Details"}
//             />{" "}
//           </div>
//           <Field
//             classes={{ root: classes.field }}
//             id={"store_id"}
//             label={formatMessage({
//               id: "enquiryForm.store",
//               defaultMessage: "Select Store*",
//             })}
//           >
//             {" "}
//             <Select
//               id={"store_id"}
//               field={"store_id"}
//               items={stores}
//               validate={isRequired}
//             />{" "}
//           </Field>
//           <Field
//             classes={{ root: classes.fieldMsg }}
//             id={"comment"}
//             label={formatMessage({
//               id: "enquiryForm.message",
//               defaultMessage: "Enquiry Message*",
//             })}
//           >
//             {" "}
//             <TextArea
//               field={"comment"}
//               validate={isRequired}
//               placeholder={formatMessage({
//                 id: "enquiryForm.messagePlaceholder",
//                 defaultMessage: "Enter Your Message Here",
//               })}
//             />{" "}
//           </Field>{" "}
//         </div>
//         <div className={classes.preferences}>
//           {" "}
//           <div className={classes.subtitle}>
//             {" "}
//             <FormattedMessage
//               id={"enquiryForm.contactPreferences"}
//               defaultMessage={"Contact Preferences*"}
//             />{" "}
//           </div>
//           <div className={classes.checkbox}>
//             {" "}
//             <Checkbox
//               id="email_pref"
//               field="email_pref"
//               label={formatMessage({
//                 id: "enquiryForm.byEmail",
//                 defaultMessage: "By Email",
//               })}
//               onChange={}
//               validate={combine([[isOneOf, { fieldKeys: CHECKBOX_FIELDS }]])}
//             />{" "}
//           </div>
//           <Checkbox
//             id="phone_pref"
//             field="phone_pref"
//             label={formatMessage({
//               id: "enquiryForm.byCellphone",
//               defaultMessage: "By Cellphone",
//             })}
//             onChange={handleCheckbox}
//             validate={combine([
//               [isOneOf, { fieldKeys: CHECKBOX_FIELDS, showError: true }],
//             ])}
//           />{" "}
//         </div>
//         <Button priority={"high"} type={"submit"} disabled={enquiryLoading}>
//           {" "}
//           {submitLabel}{" "}
//         </Button>{" "}
//       </div>{" "}
//     </Form>
//   );
// };
// EnquiryForm.propTypes = {
//   classes: shape({
//     root: string,
//     header: string,
//     content: string,
//     subtitle: string,
//     field: string,
//     checkbox: string,
//     personalDetails: string,
//     details: string,
//     fieldMsg: string,
//     fieldPhone: string,
//     pageHeader: string,
//   }),
// };

// export default EnquiryForm;
