/* tslint:disable */
export interface ComplaintDTO {
  createdOn?: string;
  description?: string;
  id?: number;
  latitude?: number;
  longitude?: number;
  placeAddress?: string;
  placeGeopoint?: string;
  status?: 'PENDING' | 'IN_PROGRESS' | 'DONE';
  subject?: string;
  userId?: string;
}
