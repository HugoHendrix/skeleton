### Anotações Bootstrap 5

No **Bootstrap 5**, as classes de **colunas responsivas** mudaram para simplificar e unificar o design. Não há mais o uso de `col-xs` (que era do Bootstrap 3). Em vez disso, as classes são baseadas em **breakpoints** claramente definidos.

### Breakpoints no Bootstrap 5
Aqui estão os breakpoints e as classes correspondentes para definir tamanhos de colunas:

| **Breakpoint** | **Classe**      | **Largura mínima** |
|-----------------|-----------------|--------------------|
| Extra pequeno   | `col-`          | Nenhuma (mobile-first, padrão) |
| Pequeno         | `col-sm-`       | 576px             |
| Médio           | `col-md-`       | 768px             |
| Grande          | `col-lg-`       | 992px             |
| Extra grande    | `col-xl-`       | 1200px            |
| Extra extra grande | `col-xxl-`  | 1400px            |

### Como usar:
1. **Sem especificar breakpoint:** Usar apenas `col-` funciona para todos os tamanhos de tela.
   ```html
   <div class="row">
     <div class="col">Coluna 1</div>
     <div class="col">Coluna 2</div>
   </div>
   ```
   - Ambas as colunas terão o mesmo tamanho em qualquer tela.

2. **Para dispositivos móveis (mobile-first):** Não é necessário usar `col-xs`, pois `col-` já funciona como o padrão para telas pequenas.
   ```html
   <div class="row">
     <div class="col-12">Ocupa 100% no celular</div>
     <div class="col-6">50% no celular</div>
   </div>
   ```

3. **Classes com breakpoints específicos:**
   - Para telas pequenas (`sm`) e maiores:
     ```html
     <div class="row">
       <div class="col-sm-6">50% largura em `sm` e maiores</div>
       <div class="col-sm-6">50% largura em `sm` e maiores</div>
     </div>
     ```

4. **Combinação de breakpoints para diferentes tamanhos de tela:**
   - Aqui, o layout se adapta dependendo do tamanho da tela:
     ```html
     <div class="row">
       <div class="col-12 col-md-6 col-lg-4">Adapta para 100%, 50%, 33.33%</div>
       <div class="col-12 col-md-6 col-lg-4">Adapta para 100%, 50%, 33.33%</div>
       <div class="col-12 col-md-6 col-lg-4">Adapta para 100%, 50%, 33.33%</div>
     </div>
     ```

### Conclusão:
- **Não use `col-xs` no Bootstrap 5**, ele foi substituído pelo padrão `col-` para dispositivos móveis.
- Use `col-sm-`, `col-md-`, `col-lg-`, etc., conforme necessário para personalizar o layout em telas maiores.

---

No **Bootstrap 5**, o sistema de classes para **mostrar** ou **esconder** elementos também mudou para ser mais intuitivo e flexível. As antigas classes como `hidden-xs`, `hidden-sm`, etc., foram substituídas por uma abordagem baseada em **utilitários responsivos de visibilidade**.

### Classes de Visibilidade no Bootstrap 5
Você pode usar as classes de **`d-*`** para controlar a exibição dos elementos.

#### Estrutura Geral
- `d-{breakpoint}-none`: **Esconde** o elemento a partir de um determinado breakpoint.
- `d-{breakpoint}-block`: **Exibe** o elemento como `block` a partir de um determinado breakpoint.
- `d-{breakpoint}-inline`: Exibe o elemento como `inline` a partir de um determinado breakpoint.
- `d-{breakpoint}-inline-block`: Exibe o elemento como `inline-block` a partir de um determinado breakpoint.

---

### Exemplos Práticos

1. **Esconder em telas pequenas (mobile):**
   ```html
   <div class="d-none d-sm-block">
     Este texto é escondido em dispositivos pequenos (menos de 576px).
   </div>
   ```

2. **Esconder em telas grandes:**
   ```html
   <div class="d-block d-lg-none">
     Este texto só aparece em dispositivos menores que 992px.
   </div>
   ```

3. **Mostrar em telas específicas (por exemplo, apenas em tablets):**
   ```html
   <div class="d-none d-md-block d-lg-none">
     Este texto aparece apenas entre 768px e 991px.
   </div>
   ```

---

### Tabela Resumida de Breakpoints e Classes

| **Classe**        | **Efeito**                           |
|--------------------|--------------------------------------|
| `d-none`          | Esconde em todas as telas.          |
| `d-block`         | Exibe como bloco em todas as telas. |
| `d-sm-none`       | Esconde em telas >= 576px.          |
| `d-md-none`       | Esconde em telas >= 768px.          |
| `d-lg-none`       | Esconde em telas >= 992px.          |
| `d-xl-none`       | Esconde em telas >= 1200px.         |
| `d-xxl-none`      | Esconde em telas >= 1400px.         |

---

### Combinação de Exibição Responsiva

Se você quiser combinar exibições para diferentes breakpoints, pode fazer algo assim:

```html
<!-- Escondido em telas pequenas, exibido em telas médias e maiores -->
<div class="d-none d-md-block">
  Somente visível em tablets e telas maiores.
</div>

<!-- Escondido em telas médias e maiores -->
<div class="d-block d-md-none">
  Somente visível em celulares.
</div>
```

---

### Dica para Acessibilidade:
Se estiver escondendo algo visualmente mas quer que continue acessível para leitores de tela, combine com `sr-only` ou outras práticas de acessibilidade, dependendo do caso.

### Conclusão:
Não use `hidden-xs` e similares, pois elas são obsoletas. As novas classes como `d-none`, `d-sm-block`, `d-lg-none` são muito mais flexíveis e poderosas!

---

Para **esconder um elemento em telas menores** no **Bootstrap 5**, você pode usar a classe de utilitário `d-none` combinada com a classe do breakpoint a partir do qual o elemento deve ser exibido.

### Exemplo para esconder em telas menores que 576px:
```html
<div class="d-none d-sm-block">
  Este conteúdo está escondido em telas pequenas (menos de 576px).
</div>
```

### Como funciona:
- `d-none`: Esconde o elemento em **todas as telas**.
- `d-sm-block`: Mostra o elemento a partir do breakpoint `sm` (576px) em diante.

---

### Exemplo Completo:
Se você quiser esconder o elemento em telas menores que diferentes tamanhos, veja estas opções:

1. **Esconder em telas menores que 768px (`md`):**
   ```html
   <div class="d-none d-md-block">
     Escondido em telas menores que 768px.
   </div>
   ```

2. **Esconder em telas menores que 992px (`lg`):**
   ```html
   <div class="d-none d-lg-block">
     Escondido em telas menores que 992px.
   </div>
   ```

3. **Esconder apenas em telas pequenas (até 576px):**
   ```html
   <div class="d-block d-sm-none">
     Visível somente em telas pequenas (menores que 576px).
   </div>
   ```

---

### Tabela para Referência Rápida:

| **Classe**          | **Efeito**                                           |
|----------------------|-----------------------------------------------------|
| `d-none`            | Esconde em todas as telas.                          |
| `d-sm-none`         | Esconde em telas >= 576px.                          |
| `d-md-none`         | Esconde em telas >= 768px.                          |
| `d-lg-none`         | Esconde em telas >= 992px.                          |
| `d-xl-none`         | Esconde em telas >= 1200px.                         |
| `d-xxl-none`        | Esconde em telas >= 1400px.                         |

### Combinação para Controle Preciso:
Você pode combinar classes para mostrar ou esconder elementos apenas em intervalos específicos:
```html
<!-- Visível apenas entre 576px e 992px -->
<div class="d-none d-sm-block d-lg-none">
  Visível apenas em tablets e dispositivos médios.
</div>
```

### Conclusão:
Use as combinações de `d-none` e os breakpoints (`sm`, `md`, `lg`, etc.) para controlar a visibilidade de elementos em telas menores.