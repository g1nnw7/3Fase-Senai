import random
import time
import os

# Lista de emojis para a roleta
emojis = ["🍒", "🍋", "🍊", "🍇", "🍉", "⭐", "💎", "🔔"]

def girar_roleta():
    # Animação de giro
    for _ in range(15):
        temp = [random.choice(emojis) for _ in range(3)]
        print(" ".join(temp))
        time.sleep(0.1)
        os.system('cls' if os.name == 'nt' else 'clear')

    # Resultado final
    resultado = [random.choice(emojis) for _ in range(3)]
    print(" ".join(resultado))

    # Verifica se ganhou
    if resultado[0] == resultado[1] == resultado[2]:
        print("\n🎉 PARABÉNS! Você ganhou no cassino! 🎉")
    else:
        print("\n❌ Tente novamente!")

# Executa
girar_roleta()
