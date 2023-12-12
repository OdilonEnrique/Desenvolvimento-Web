type Props = {
    name: string;
    avatar_url: string;
    bio: string;
}

export function UserCard({ name, avatar_url, bio }: Props) {
    return(
        <section style={{textAlign: 'center'}}>
            <h2>{name}</h2>
            <img src={avatar_url} alt="" width={240} />
             <p>{bio}</p>
        </section>
    )
}