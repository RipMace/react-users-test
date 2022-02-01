import React, {useState, useMemo} from 'react';
import Modal from 'components/Modal';
import NewUser from 'pages/NewUser';
import {useUserContext} from "context/usersContext";
import useDetectClickOutside from "hooks/useDetectClickOutside";
import Alert from "components/Alert";

const NewUsersModals = () => {
  const { state, dispatch } = useUserContext()
  const [openCheck, setOpenCheck] = useState(false)
  const modalsStack = useMemo(() => state.modals.map(modalIndex => ({ modalIndex, ref: React.createRef()})), [state.modals])

  const getModalStyles = (modalIndex) => {
    if (modalIndex) {
      return ({
        padding: '20px',
        background: 'white',
        width: '300px',
        marginLeft: `${modalIndex * 30}px`,
        marginTop: `${modalIndex * 30}px`,
      })
    }
  }

  const removeNewUserModal = () => {
    dispatch({type: 'REMOVE_NEW_FRIEND_MODAL' })
    setOpenCheck(false)
  }

  useDetectClickOutside(modalsStack[modalsStack.length -1]?.ref, () => setOpenCheck(true))

  return (<>
    {modalsStack.map(({ modalIndex, ref }) => (
      <Modal>
        <div ref={ref} id={`modal-${modalIndex}`} style={getModalStyles(modalIndex)}>
          <NewUser removeModal={removeNewUserModal} />
        </div>
      </Modal>
    ))}
    {openCheck &&
      <Modal>
        <Alert
          text="Do you want to dismiss the user creation?"
          onConfirm={removeNewUserModal}
          onRefuse={() => setOpenCheck(false)}
        />
      </Modal>
    }
  </>
  )

}

export default NewUsersModals;
