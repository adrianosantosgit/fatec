from itertools import chain, combinations

def conjunto_das_partes(A):
    # Função para gerar todas as combinações possíveis dos elementos de A
    return list(chain.from_iterable(combinations(A, r) for r in range(len(A)+1)))

# Exemplo de uso
A = [1, 2, 3, 4]
resultado = conjunto_das_partes(A)

# Imprime o conjunto das partes
for subconjunto in resultado:
    print(subconjunto)

print('Tamanho do conjunto: ', subconjunto.__len__())
print("Possibilidades: ", resultado.__len__())