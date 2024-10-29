

| Comando Git                  | Descrição                                                                                                                                             |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `git init`                   | Inicializa um novo repositório Git no diretório atual.                                                                                                |
| `git clone <url>`            | Faz o download de um repositório remoto e cria uma cópia local.                                                                                       |
| `git add <arquivo>`          | Adiciona arquivos específicos para serem incluídos no próximo commit.                                                                                 |
| `git add .`                  | Adiciona todos os arquivos modificados no diretório atual ao próximo commit.                                                                          |
| `git commit -m "mensagem"`   | Salva as alterações adicionadas com uma mensagem explicativa.                                                                                        |
| `git status`                 | Mostra o status atual dos arquivos no repositório (modificados, preparados para commit, etc.).                                                        |
| `git log`                    | Exibe o histórico de commits do repositório.                                                                                                          |
| `git branch`                 | Lista todas as branches locais.                                                                                                                       |
| `git branch <nome>`          | Cria uma nova branch chamada `<nome>`.                                                                                                                |
| `git branch -d <nome>`       | Exclui a branch `<nome>` (se ela tiver sido totalmente mesclada com a branch atual).                                                                 |
| `git checkout <nome>`        | Alterna para a branch `<nome>`.                                                                                                                       |
| `git checkout -b <nome>`     | Cria e muda para uma nova branch chamada `<nome>`.                                                                                                    |
| `git merge <branch>`         | Mescla a branch especificada com a branch atual.                                                                                                      |
| `git pull`                   | Atualiza a branch local com as alterações da branch remota correspondente.                                                                            |
| `git push`                   | Envia commits da branch local para o repositório remoto.                                                                                              |
| `git push origin <branch>`   | Envia a branch local especificada para o repositório remoto.                                                                                          |
| `git remote -v`              | Lista os repositórios remotos configurados para o repositório atual.                                                                                  |
| `git fetch`                  | Baixa as informações das branches remotas sem mesclar com a branch local.                                                                             |
| `git stash`                  | Salva temporariamente as alterações não commitadas, permitindo alternar para outra branch sem perder o progresso.                                     |
| `git stash apply`            | Restaura as alterações do stash para a branch atual.                                                                                                  |
| `git reset --hard <commit>`  | Desfaz todas as alterações para um commit específico, descartando o que está após ele.                                                                |
| `git rebase <branch>`        | Reaplica commits da branch atual sobre a branch especificada, criando uma linha de commits linear.                                                    |
| `git log --oneline`          | Exibe o histórico de commits de forma condensada (um commit por linha).                                                                              |
| `git diff`                   | Exibe as diferenças entre o estado atual e o último commit.                                                                                           |
| `git config --global user.name "Seu Nome"` | Define o nome do usuário globalmente (para todos os repositórios).                                                                 |
| `git config --global user.email "email@exemplo.com"` | Define o e-mail do usuário globalmente (para todos os repositórios).                                   |

