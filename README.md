# LevelCorp Frontend Demo

Versao estatica e independente da LevelCorp para demonstracoes rapidas.

## Caracteristicas

- Sem backend.
- Sem banco.
- Sem APIs externas.
- Sem variaveis de ambiente.
- Login e dados mockados no navegador.
- Pronta para Vercel como projeto estatico.

## Executar localmente

Rode o servidor estatico incluido:

```powershell
npm.cmd run dev
```

Abra `http://localhost:4173`.

Atalhos diretos:

- `http://localhost:4173/?role=ceo`
- `http://localhost:4173/?role=gestor`
- `http://localhost:4173/?role=colaborador`
- `http://localhost:4173/?role=ceo&page=map`

## Deploy na Vercel

1. Envie esta pasta para o GitHub.
2. Importe o repositorio na Vercel.
3. Configure `LevelCorp-frontend-demo` como Root Directory.
4. Framework Preset: `Other`.
5. A Vercel usara automaticamente `npm run build`.
6. Output Directory: `dist`.
7. Clique em Deploy.

Nenhuma variavel de ambiente e necessaria.

## Aviso

Esta versao e somente demonstrativa. Alteracoes ficam apenas no navegador e
podem ser perdidas ao limpar o armazenamento local.
