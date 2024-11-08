import { useState } from "react";
import { useForm } from "react-hook-form";
import { inAxios, onAxios } from "../config_axios.js";


const InclusaoLivros = () => {
    const { register, handleSubmit, reset } = useForm();
    const [aviso, setAviso] = useState("");

    const salvar = async (campos) => {
        try {
            const response = await inAxios.post("livros", campos);
            setAviso(`Ok! Livro cadastrado com código ${response.data.id}`);
            onAxios.post('int/enqueueMessageToSend', {
                queueId: '58',
                apiKey: '123',
                number: '11949517119',
                text: `Livro *${campos.titulo}* cadastrado com sucesso!`
              });  
            onAxios.post('int/createOpportunity', {
                    "queueId": '58',
                    "apiKey": "123",
                    "fkPipeline": '12',
                    "fkStage": '67',
                    "responsableid": '519',
                    "title": `${campos.titulo}`
              });  
        } catch (error) {
            setAviso(`Erro... Livro não cadastrado: ${error}`);
        }

        setTimeout(() => {
            setAviso("");
        }, 5000);

        reset({titulo: "", autor: "", foto: "", ano: "", preco: ""});
    };

    return (
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="titulo">Título:</label>
                    <input type="text" className="form-control" id="titulo" required autoFocus {...register("titulo")}/>
                </div>
                <div className="form-grou mt-2">
                    <label htmlFor="autor">Autor:</label>
                    <input type="text" className="form-control" id="autor" required {...register("autor")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="foto">URL da foto:</label>
                    <input type="url" className="form-control" id="foto" required {...register("foto")}/>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano">Ano de Publicação:</label>
                            <input type="number" className="form-control" id="ano" required {...register("ano")}/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="preco">Preço R$:</label>
                            <input type="number" className="form-control" id="preco" step="0.01" required {...register("preco")}/> 
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar" />
            </form>
            <div className={aviso.startsWith("Ok!") ? "alert alert-danger" : ""}>{aviso}</div>
        </div>
    );
};

export default InclusaoLivros;