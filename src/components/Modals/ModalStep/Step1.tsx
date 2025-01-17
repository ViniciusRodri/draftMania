import React, { ReactNode } from 'react';


type StepProps = {

};

export const dataRules = [
  {
    title: "Personalize seu Time:",
    text: " - Escolha o nome e o escudo do seu time."
  },
  {
    title: "Formato do Draft:",
    text: " - O Draft pode ter entre 1 e 8 jogadores.",
    text2: "- Cada elenco comporta até 16 jogadores. Você pode selecionar atletas de qualquer posição, mas é recomendável montar um time com as posições clássicas (GOL, LD, LE, ZAG...).",
  },
  {
    title: "Regras do Draft:",
    text: "- Cada jogador terá 2 minutos para fazer sua escolha. Se não tiver nenhuma escolha entre esse tempo, a vez é passada para o proximo jogador.",
    text2: "- A ordem do draft será definida automaticamente antes do início.",
  },
  {
    title: "Votação e Vitória:",
    text: "- Ao final do Draft, todos os jogadores poderão votar no melhor elenco.",
    text2: "- O vencedor do Draft será aquele que obtiver a melhor pontuação na votação final.",
  },
  
]

export const Step1: React.FC<StepProps> = ({  }) => {
  return (
   <>
   <h1 className="text-black font-bold text-xl text-center">REGRAS!</h1>
   <div className='flex flex-col text-left p-8 gap-4'>
    {dataRules?.map((item) => (
      <ul className="text-black font-semibold font-lg list-disc">
        <li className="text-black font-semibold text-base">{item.title} <p className='font-light pl-2'>{item.text}</p>
        <p className='font-light pt-2 pl-2'>{item.text2 ? item.text2 : ''}</p>
        </li>
        </ul>
    ))}
   </div>
   </>
  );
};
