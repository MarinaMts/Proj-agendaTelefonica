const express = require("express");
const router = express.Router();

const modelContato = require("../model/ContatoModel");

router.post('/inserirContato', (req, res)=>{
    let {NOME_CONTATO, TEL_CONTATO, APELIDO, EMAIL_CONTATO, ID_CATEGORIA_CONTATO} = req.body;

    modelContato.create(
        {NOME_CONTATO, TEL_CONTATO, APELIDO, EMAIL_CONTATO, ID_CATEGORIA_CONTATO}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Contato inserido com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar o contato',
                        erroBancoDados: erro
                    });
        }
    );
});


router.get('/listarContato', (req, res)=>{
    modelContato.findAll()
        .then(
            (contatos)=>{
                return res.status(200).json(contatos);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Erro ao selecionar os dados de contato',
                    erroBancoDados: erro
                });
            }
        );
});

router.put('/alterarContato', (req, res)=>{
    let {id, NOME_CONTATO} = req.body;

    modelContato.update(
        {NOME_CONTATO,TEL_CONTATO, APELIDO, EMAIL_CONTATO, ID_CATEGORIA_CONTATO},
        {where:{id}}
    ).then( ()=>{
        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Contato alterado com sucesso!'
        });
    }).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao alterar o contato',
                erroBancoDados: erro
            });
        }
    );
});

router.delete('/excluirContato/:id', (req, res)=>{
    let {id} = req.params;

    modelContato.destroy(
        {where: {id}}
    ).then( ()=>{
        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Contato excluido com sucesso!'
        });
    }).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao excluir o contato',
                erroBancoDados: erro
            });
        }
    );
});

module.exports = router;
