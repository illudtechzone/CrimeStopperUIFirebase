import { Type } from '@angular/core';

export class Complaint {
    id?:string;
    type?:string;
    summary?:string;
    complaintId?: number;
    fileBlob?: string;
    fileBlobContentType?: string;
    imagUrl?:string;
}
