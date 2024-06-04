import React from 'react';
import EmailBox from "./containers/Emailbox";
import EmailSendedBox from "./containers/EmailSendedBox";



const SendEmail = () => {

    const [emailIsSend, setEmailIsSend] = React.useState(false);

    const handleEmailSubmit = (data: { name: string; email: string; content: string; phoneNumber: string }) => {
        //处理Email文件
        if (data) {
            setEmailIsSend(true);
            console.log('Email submitted!');
            console.log(data);
        }
    };


if (emailIsSend === false) {

    return (
        <div>
            <EmailBox onFormSubmit={handleEmailSubmit} />
        </div>
    );
} else {
    return (
        <div>
            <EmailSendedBox />
        </div>
    );
}

};

export default SendEmail;