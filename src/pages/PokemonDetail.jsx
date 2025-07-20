import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardContainer, StatsContainer } from "./PokemonDetail.styles";
export function PokemonDetail() {
  const { id } = useParams();

  // Estado para os dados principais
  const [pokemon, setPokemon] = useState(null);

  // Estado para os dados da espécie (descrição, etc)
  const [species, setSpecies] = useState(null);

  // Estado para loading e erro
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        // Busca dados principais
        const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!resPokemon.ok) throw new Error("Pokémon não encontrado");
        const dataPokemon = await resPokemon.json();
        setPokemon(dataPokemon);

        // Busca dados da espécie
        const resSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        if (!resSpecies.ok) throw new Error("Espécie do Pokémon não encontrada");
        const dataSpecies = await resSpecies.json();
        setSpecies(dataSpecies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!pokemon || !species) return null;

  // Pega a imagem
  const image = pokemon.sprites.front_default;

  // Pega tipos como string
  const types = pokemon.types.map(t => t.type.name).join(", ");

  // Pega habilidades como string
  const abilities = pokemon.abilities
    .map(a => a.ability.name)
    .join(", ");

  // Pega stats principais e mostra só alguns (HP, Ataque, Defesa)
  const stats = {};
  pokemon.stats.forEach(stat => {
    const name = stat.stat.name;
    if (["hp", "attack", "defense", "special-attack", "special-defense", "speed"].includes(name)) {
      stats[name] = stat.base_stat;
    }
  });


  const flavorTextEntry = species.flavor_text_entries.find(
    entry => entry.language.name === "pt"
  );
  const description = flavorTextEntry ? flavorTextEntry.flavor_text.replace(/\n|\f/g, " ") : "Descrição não disponível.";

  return (
    <CardContainer $isDetail={true}>
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img src={image} alt={pokemon.name} />
      <p><strong>Tipo:</strong> {types}</p>
      <p><strong>Habilidades:</strong> {abilities}</p>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Descrição:</strong> {description}</p>
      <StatsContainer>
        <h4>Status Base</h4>
        <ul>
          <li>HP: {stats.hp}</li>
          <li>Ataque: {stats.attack}</li>
          <li>Defesa: {stats.defense}</li>
          <li>Ataque Especial: {stats["special-attack"]}</li>
          <li>Defesa Especial: {stats["special-defense"]}</li>
          <li>Velocidade: {stats.speed}</li>
        </ul>
      </StatsContainer>
    </CardContainer>
  );
}
