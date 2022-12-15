import propTypes from 'prop-types';

export const Notification = ({ message }) => {
    return (
        <p className="messageText">{ message }</p>
    )
}


Notification.propTypes = {
    message: propTypes.string.isRequired,
};

