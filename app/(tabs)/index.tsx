// Importa módulos e componentes do React Native e de outras bibliotecas.
import { Image, StyleSheet, Platform } from 'react-native'; // Importa componentes do React Native
import { HelloWave } from '@/components/HelloWave'; // Importa um componente personalizado
import ParallaxScrollView from '@/components/ParallaxScrollView'; // Importa um componente personalizado
import { ThemedText } from '@/components/ThemedText'; // Importa o componente ThemedText
import { ThemedView } from '@/components/ThemedView'; // Importa o componente ThemedView

// Define o componente principal da tela, chamada "HomeScreen".
export default function HomeScreen() {
  return (
    // Componente ParallaxScrollView (uma tela rolável com efeito parallax).
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} // Define a cor do fundo do cabeçalho para diferentes temas
      headerImage={  // Define a imagem que vai ser mostrada no cabeçalho.
        <Image
          source={require('@/assets/images/partial-react-logo.png')} // Caminho para a imagem do logo
          style={styles.reactLogo} // Aplica um estilo para a imagem
        />
      }
    >
      {/* Bloco para o título e componente HelloWave (um componente customizado). */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">AAAAAAAKIODIO</ThemedText> {/* Exibe o título */}
        <HelloWave /> {/* Exibe o componente HelloWave */}
      </ThemedView>

      {/* Bloco para o passo 1: Instruções para o usuário */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText> {/* Subtítulo para a etapa */}
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',  // Atalho para iOS
              android: 'cmd + m',  // Atalho para Android
              web: 'F12'  // Atalho para a web
            })}
          </ThemedText>{' '}
          to open developer tools. {/* Exibe instruções de uso e atalhos */}
        </ThemedText>
      </ThemedView>

      {/* Bloco para o passo 2: Instruções adicionais */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText> {/* Mais instruções para explorar o app */}
      </ThemedView>

      {/* Bloco para o passo 3: Reiniciar o projeto */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView> // Fecha o componente ParallaxScrollView
  );
}

// Definindo os estilos para os componentes
const styles = StyleSheet.create({
  
  titleContainer: {
    flexDirection: 'row',  // Organiza os itens na horizontal
    alignItems: 'center',  // Alinha os itens verticalmente no centro
    gap: 8,  // Espaço entre os itens
  },
  stepContainer: {
    gap: 8,  // Espaço entre os elementos dentro do container
    marginBottom: 8,  // Espaço abaixo de cada passo
  },
  reactLogo: {
    height: 178,  // Altura da imagem do logo
    width: 290,  // Largura da imagem
    bottom: 0,  // Alinha a imagem ao fundo
    left: 0,  // Alinha a imagem à esquerda
    position: 'absolute',  // Faz a imagem flutuar sobre outros elementos
  },
});