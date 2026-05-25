export default function Specifications({produto}){
    if(!produto)return

    return (
        <div className="rounded-2xl  overflow-hidden">
            <table className="w-full [&_td]:p-4 [&_tr]:odd:bg-white [&_tr]:even:bg-gray-50  ">
                <tr className=" ">
                    <td className="text-[rgba(26,28,29,1)]">Editora</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.livros.editora}</td>
                </tr>
                <tr className=" ">
                    <td className="text-[rgba(26,28,29,1)]">Nome</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.nome}</td>
                </tr>
                <tr>
                    <td className="text-[rgba(26,28,29,1)]">Idioma</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.livros.idioma}</td>
                </tr>
                <tr>
                    <td className="text-[rgba(26,28,29,1)]">Capa</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.livros.tipo_capa}</td>
                </tr>
                <tr>
                    <td className="text-[rgba(26,28,29,1)]">Páginas</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.livros.quantidade_paginas}</td>
                </tr>
                <tr>
                    <td className="text-[rgba(26,28,29,1)]">Ano</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.ano}</td>
                </tr>
                <tr>
                    <td className="text-[rgba(26,28,29,1)]">Peso</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.livros.peso}</td>
                </tr>
                <tr>
                    <td className="text-[rgba(26,28,29,1)]">Dimensões</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.livros.dimensoes}</td>
                </tr>
                <tr>
                    <td className="text-[rgba(26,28,29,1)]">ISBN-10</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.livros.isbn10}</td>
                </tr>
                <tr>
                    <td className="text-[rgba(26,28,29,1)]">ISBN-13</td>
                    <td className="text-[rgba(71,71,71,1)]">{produto.livros.isbn13} </td>
                </tr>
            </table>
        </div>
    )
}