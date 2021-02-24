# Notes de développement

## Créer des composants avec du style réutilisables

> [Exemple](../src/components/styles/background-image-container.tsx)

> Référence: https://emotion.sh/docs/styled

On peut utiliser `styled` pour créer des composants contenant directement du style. Par exemple, le code suivant permet de créer une `div` d'une taille maximale de 600 pixels.

```tsx
// src/components/styles/container.tsx
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
`;

export default Container;
```

Par la suite, il suffit d'importer ce composant partout où l'on souhaite s'en servir. L'exemple ci-dessous permet d'afficher le composant `ComponentContent` à l'intérieur de notre `div` de 600px maximum.

```tsx
import { Container } from '../components/styles';

const MyComponent: FC = () => (
  <Container>
    <ComponentContent />
  </Container>
)
```

https://emotion.sh/docs/typescript#passing-props
