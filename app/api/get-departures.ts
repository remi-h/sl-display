export type DeparturesParam = {
    departures: DepartureParam[];
}
export type DepartureParam = {
    destination: string;
    display: string;
    expected: string;
};

export const getDepartures = async (
    siteId: number,
    transport: string,
    direction: number,
    line: number,
    forecast: number
): Promise<DepartureParam[]> => {
    const url = `https://transport.integration.sl.se/v1/sites/${siteId}/departures?transport=${transport}&direction=${direction}&line=${line}&forecast=${forecast}`;

    const response: DeparturesParam = await fetch(url)
        .then((res) => res.json())
        .catch((error) => {
            throw error;
        });

    const departures = response.departures;
    console.log(departures);
    return departures;
};