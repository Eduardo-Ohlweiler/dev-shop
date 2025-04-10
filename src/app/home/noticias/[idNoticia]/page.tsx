export default async function Noticias({
    params,
}: {
    params: { idNoticia: string };
}) {
    const { idNoticia } = await params;
    return (
        <div>
            <h1>Noticia {idNoticia}</h1>
        </div>
    );
}