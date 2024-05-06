---
title: Data analysis
type: services
nav_weight: 1
card_img:
  - IMG_8319.jpeg?fill=225x150,Center
images:
  - IMG_8319.jpeg
menu:
  main:
    parent: services
    identifier: data_analysis
    weight: 1
    # params:
    #   icon:
    #     vendor: bootstrap
    #     name: boxes
Summary:
  We process and analyze data from various Omics domains and technologies for human and mouse. All of our analyses include quality control steps and preprocessing. For sequencing data, reads are trimmed, filtered, and aligned against a reference sequence, while microarray signals undergo signal transformation and normalization.
---

We process and analyze data from various Omics domains and technologies (sequencing,microarrays) for human and mouse. All of our analyses include multiple quality control steps and preprocessing. For sequencing data, reads are trimmed, filtered, and aligned against a reference sequence, while microarray signals undergo signal transformation and normalization.

<div class="ijc_bit_card">

## Genomics

The analysis of the genome (DNA) enables the identification of mutations and genetic variations associated to disease and is important, for example, for personalized treatments. For cancer research this is crucial to identify driver mutations (mutated genes that accelerate tumor genesis) and understand tumor evolution (clonality analysis).

We analyze data from Whole Genome and Exome sequencing (WGS/WES), targeted sequencing, SNP panels and genotyping microarrays.

Our analyses:

- Variant analysis (SNP, indels, copy number variation, structural variations)

- Variant annotation (predict effect on gene expression or protein function, clinical relevance)

</div>
<div class="ijc_bit_card">

## Transcriptomics

Studyingthe cell’s transcriptome (RNA), aka the ‘read out of the genome’, allows to identify genes and pathways that are involved in specific diseases, conditions or responses to treatments. At the single cell level that can provide insight into rare cell populations and cellular trajectories. At the transcript level it allows insight into RNA diversity and cellular processes/mechanisms that in turn may vary across cell types and individuals.

We analyze data from expression microarrays (miRNA, mRNA) and various types of RNA sequencing protocols (small RNA-seq, mRNA-seq and single cell RNA-seq).

Our analyses:

- Gene quantification and annotation (RNA types and abundance)

- Target prediction (miRNA)

- Cluster analysis and dimensional reduction (k-means, PCA, MDS, tSNE )

- Differential expression analysis

- Pathway analysis of differentially expressed genes (up/downregulated)

- Alternative splicing, transcriptomic diversity

- Detection of fusion genes

- Variant calling (RNA editing)

- Cell type deconvolution (bulk mRNA-seq)

</div>
<div class="ijc_bit_card">

## Epigenomics

Epigenomic modifications are modifications that affect the genome without modifying the underlying DNA sequence. These can be chemical modifications such as DNA methylation (= addition of a methyl-group to the 5th C of the cytosine base) or proteins (and their modifications) binding to the DNA that affect the DNA's structural properties (packaging, 3D structure). Modifications of the epigenome are thought to affect the DNA’s transcriptional potential ('chromatin state'), or in other words, regulate gene expression. Theyare used as biomarkers and provide insight into biological mechanisms and processes.

### DNA methylation

We analyze DNA methylation mainly from the Illumina Infinium BeadChip microarray (human, mouse), but also from sequenced based technologies such as Whole Genome Bisulfite Sequencing (WGBS), Reduced Representation Bisulfite Sequencing (RRBS) and bisulfite-free technologies such as enzymatic Methyl-seq.

Our analyses:

- Exploratory data analysis (PCA)

- Differential methylation analysis

- Functional annotation of differential methylated CpGs and differentially methylated regions (associated genes, overlapping regulatory elements, CGI context)

- Identification of different types of methylation regions: unmethylated regions (UMRs), hypermethylated regions (UMRs), partially methylated domains (PMDs)

- Cell type deconvolution

- Age prediction

- Prediction of Copy Number Variation (CNV)

### Chromatin

We process mainly sequencing data from Chromatin Immunoprecipitation (ChIP-seq) to study DNA protein binding (histones, transcription factors) and Assay for Transposase-Accessible Chromatin (ATAC-seq) to identify open chromatin regions.

Our analyses:

- Exploratory data analysis (PCA)

- Peak calling

- Functional annotation peaks (genes, regulatory)

- Motif analysis

- Differential analysis

</div>
<div class="ijc_bit_card">

## Epitranscriptomics

Similarly to epigenomic modifications, epitranscriptomic modifications are modifications to the transcriptome that do not alter the underlying RNA sequence. Studying these modifications allows insight into RNA biology, cellular processes and mechanism that can be important in disease.

We mainly process data from infrared crosslinking Immunopreciptation(irCLIP) for the study of RNA-protein interactions.

Our analyses:

- Exploratory data analysis (PCA)

- Peak calling

- Functional annotation peaks (RNA biotype, genes, gene region)

- Motif analysis

- Differential analysis

</div>