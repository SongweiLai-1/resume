// Email.tsx
import React from 'react';
import EmailBox from "./Emailbox";
import EmailSendedBox from "./EmailSendedBox";

const Email = () => {
    const [emailIsSend, setEmailIsSend] = React.useState(false);

    const handleEmailSubmit = (data: { name: string; email: string; content: string }) => {
        // 处理Email文件
        if (data) {
            setEmailIsSend(true);
            console.log('Email submitted!');
            console.log(data);
        }
    };

    return (
        <div>
            {!emailIsSend ? (
                <EmailBox  />
            ) : (
                <EmailSendedBox />
            )}
        </div>
    );
};

export default Email;
