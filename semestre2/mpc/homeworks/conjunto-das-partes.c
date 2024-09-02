#include <stdio.h>
#include <math.h>

// Função para imprimir o conjunto das partes
void printPowerSet(int *set, int set_size) {
    unsigned int pow_set_size = pow(2, set_size);
    int counter, j;

    // Loop para gerar todas as combinações possíveis
    for (counter = 0; counter < pow_set_size; counter++) {
        printf("{ ");
        for (j = 0; j < set_size; j++) {
            // Verifica se o j-ésimo bit em counter está definido
            if (counter & (1 << j))
                printf("%d ", set[j]);
        }
        printf("}\n");
    }
}

int main() {
    int set[] = {1, 2, 3, 4, 5, 6};
    int set_size = sizeof(set) / sizeof(set[0]);

    printPowerSet(set, set_size);

    return 0;
}
