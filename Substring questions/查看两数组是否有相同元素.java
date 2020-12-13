    private boolean notEqual(String a, String b) {
        int[] charArray = new int[30];
        for (int i = 0; i < a.length(); i ++) {
            charArray[a.charAt(i) - 'a'] = 1;
        }
        for (int i = 0; i < b.length(); i ++) {
            if (charArray[b.charAt(i) - 'a'] == 1) {
                return false;
            }
        }
        return true;
    }

