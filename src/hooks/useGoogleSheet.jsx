/* eslint-disable no-alert, no-new, import/no-extraneous-dependencies */

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { useEffect, useState } from 'react';
import credential from '../assets/keys/googleSheetCredential.json';
import { GOOGLE_SHEET_ID } from '../assets/keys';

// 구글 시트 조회하는 로직
export const getGoogleSheet = async () => {
  const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);
  // 구글 인증이 필요하다.
  await doc.useServiceAccountAuth(credential);
  await doc.loadInfo();
  return doc;
};

// 구글 시트 조회하는 custom useHook
const useGoogleSheet = (sheetId) => {
  const [googleSheetRows, setGoogleSheetRows] = useState([]);

  const fetchGoogleSheetRows = async () => {
    const googleSheet = await getGoogleSheet();
    const sheetsByIdElement = googleSheet.sheetsById[sheetId];
    const rows = await sheetsByIdElement.getRows();
    setGoogleSheetRows(rows);
  };

  useEffect(() => {
    fetchGoogleSheetRows();
  }, []);

  return [googleSheetRows];
};

export default useGoogleSheet;
