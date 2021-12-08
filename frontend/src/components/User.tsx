import {FC} from "react"

interface IUser {
    name: string;
    email: string;
}

interface Props {
    user:IUser
}

const User: FC<Props> = ({user}) => {
    return (
        <div>
            <p>
                <strong>
                    Nome:{" "}
                </strong> 
                {user.name}
            </p>
            <p>
                <strong>
                    E-mail:{" "}
                </strong> 
                {user.email}
            </p>
        </div>
    )
}

export default User