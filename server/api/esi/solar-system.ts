
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const name = query.name as string

  const ESI_BASE = 'https://esi.evetech.net/latest'


  const searchRes = await $fetch<{ solar_system?: number[] }>(`${ESI_BASE}/universe/ids`, {
    method: 'POST',
    body: [name]
  })

  const systemId = searchRes?.systems[0].id

  const systemData = await $fetch(`${ESI_BASE}/universe/systems/${systemId}/`)
  const constellationData = await $fetch(
    `${ESI_BASE}/universe/constellations/${systemData.constellation_id}/`
  )
  const regionData = await $fetch(
    `${ESI_BASE}/universe/regions/${constellationData.region_id}/`
  )

  return {
    id: systemData.system_id,
    name: systemData.name,
    security_status: systemData.security_status,
    security_class: systemData.security_class,
    constellation: {
      id: constellationData.constellation_id,
      name: constellationData.name,
    },
    region: {
      id: regionData.region_id,
      name: regionData.name,
    },
    position: systemData.position,
    planets_count: systemData.planets?.length ?? 0
  }
});
