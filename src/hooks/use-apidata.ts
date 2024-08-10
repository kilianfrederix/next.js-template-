import { useQuery } from '@tanstack/react-query';

import { fetchAPIData } from '../services/apiService';

import { useAuth } from '@/app/context/AuthContext';

export function useEndpointData() {
  const { accessToken } = useAuth();

  const fetchDataWithToken = async () => {
    // Controleer of accessToken niet null is voordat de API call wordt gemaakt
    if (!accessToken) {
      throw new Error('Geen toegangstoken beschikbaar.');
    }
    return fetchAPIData('endpoint', accessToken); // Gebruikt de aangepaste versie van fetchAPIData die een token accepteert
  };

  return useQuery({
    queryKey: ['endpointData'],
    queryFn: fetchDataWithToken,
    enabled: !!accessToken, // De query wordt alleen uitgevoerd als accessToken truthy is (niet null of undefined)
    staleTime: 1000 * 60 * 5, // Data wordt als vers beschouwd voor 5 minuten
  });
}
