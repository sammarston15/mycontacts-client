import React, { FC } from "react";
import styles from "./deleteContact.module.scss";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { selectEditingContact } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/actions";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const DeleteContact: FC = () => {
  let { contactIndex }: any = useParams();
  let navigate = useNavigate();

  const dispatch = useAppDispatch();
  const editingContact = useSelector(selectEditingContact(contactIndex));

  const submitContactForDeletion = () => {
    if (editingContact) {
      swal
        .fire({
          title: "Delete Contact?",
          text: "Are you sure you want to delete this contact?",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          confirmButtonText: "Delete",
          confirmButtonColor: "red",
          focusConfirm: true,
          allowEscapeKey: false,
          allowOutsideClick: false,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const data = {
              editingContact,
            };
            dispatch(deleteContact(data))
              .unwrap()
              .then(() => {
                swal.fire({
                  icon: "success",
                  title: "Success!",
                  text: "You have successfully deleted the contact.",
                });
                navigate("/");
              })
              .catch((error: any) => {
                swal
                  .fire({
                    icon: "error",
                    text: JSON.stringify(error),
                  })
                  .then(() => navigate("/"));
              });
          }
        })
        .catch((error: any) => {
          swal.fire({
            icon: "error",
            text: JSON.stringify(error),
          });
        });
    } else {
      swal.fire({
        icon: "error",
        text: `problem with deleting contact | "editingContact" is falsy`,
      });
    }
  };

  return (
    <>
      <button
        className={styles.deleteButton}
        onClick={submitContactForDeletion}
      >
        DELETE CONTACT
      </button>
    </>
  );
};

export default DeleteContact;
